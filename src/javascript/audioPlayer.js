const translations = {
  de: {
    play: 'Audio-Führung abspielen',
    stop: 'Audio-Führung stoppen',
    error: 'Fehler beim Laden der Audio-Datei',
    currentTime: 'Aktuelle Zeit',
    duration: 'Gesamtdauer',
    language: 'Deutsch'
  },
  en: {
    play: 'Play Audio Guide',
    stop: 'Stop Audio Guide',
    error: 'Error loading audio file',
    currentTime: 'Current Time',
    duration: 'Duration',
    language: 'English'
  },
  fr: {
    play: 'Lancer l\'audio-guide',
    stop: 'Arrêter l\'audio-guide',
    error: 'Erreur de chargement du fichier audio',
    currentTime: 'Temps actuel',
    duration: 'Durée totale',
    language: 'Français'
  }
};

const AudioPlayer = ({ audioUrl, language }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [error, setError] = React.useState(null);
    const audioRef = React.useRef(null);
    const progressBarRef = React.useRef(null);
    const t = translations[language] || translations.en;

    
  
    React.useEffect(() => {
      audioRef.current = new Audio(audioUrl);
      
      const audio = audioRef.current;
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);
  
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.pause();
      };
    }, [audioUrl]);
  
    const handleError = (e) => {
      setError('Error loading audio file');
      setIsPlaying(false);
    };
  
    const updateProgress = () => {
      const audio = audioRef.current;
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
    };
  
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };
  
    const togglePlay = () => {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(handleError);
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleProgressClick = (e) => {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      audioRef.current.currentTime = newTime;
      setProgress(pos * 100);
      setCurrentTime(newTime);
    };
  
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
  
    return React.createElement('div', { 
      className: `audio-player ${error ? 'error' : ''}`
    },
      // Top Controls
      React.createElement('div', { className: 'top-controls' },
        React.createElement('button', {
          onClick: togglePlay,
          className: 'audio-play-button',
          disabled: !!error
        },
          React.createElement('span', null, isPlaying ? t.stop : t.play)
        ),
        React.createElement('span', {
          className: 'language-badge'
        }, language === 'de' ? 'Deutsch' : language === 'en' ? 'English' : 'Français')
      ),
  
      // Progress Bar
      React.createElement('div', {
        ref: progressBarRef,
        className: 'progress-bar-container',
        onClick: handleProgressClick
      },
        React.createElement('div', {
          className: 'progress-bar-fill',
          style: { width: `${progress}%` }
        })
      ),
  
      // Time Display
      React.createElement('div', { className: 'time-display' },
        React.createElement('span', null, formatTime(currentTime)),
        React.createElement('span', null, formatTime(duration))
      ),
  
      // Error Message
      error && React.createElement('div', { className: 'error-message' }, error)
    );
  };
  
  // Add the component to the window object so it can be accessed globally
  window.AudioPlayer = AudioPlayer;