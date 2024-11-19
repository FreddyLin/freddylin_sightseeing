const CouponPopup = ({ isOpen, onClose, language }) => {
  const content = {
    de: {
      title: 'Glückwunsch!',
      description: 'Sie haben alle Sehenswürdigkeiten besucht! Hier ist Ihr Belohnungscode:',
      couponCode: 'BASEL2024',
      subtext: 'Verwenden Sie diesen Code für einen kostenlosen Drink in der Tourist Information Basel.',
      button: 'Schließen'
    },
    en: {
      title: 'Congratulations!',
      description: 'You have visited all locations! Here is your reward code:',
      couponCode: 'BASEL2024',
      subtext: 'Use this code for a free drink at the Basel Tourist Information.',
      button: 'Close'
    },
    fr: {
      title: 'Félicitations!',
      description: 'Vous avez visité tous les lieux! Voici votre code de récompense:',
      couponCode: 'BASEL2024',
      subtext: 'Utilisez ce code pour une boisson gratuite au Bureau d\'Information Touristique de Bâle.',
      button: 'Fermer'
    }
  };

  const currentContent = content[language];

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center mb-4">
            {currentContent.title} 🎉
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-4">
            <p className="text-center text-gray-600">
              {currentContent.description}
            </p>
            <div className="bg-blue-50 p-4 rounded-md text-center my-4">
              <span className="text-2xl font-bold text-blue-600">
                {currentContent.couponCode}
              </span>
            </div>
            <p className="text-sm text-center text-gray-500">
              {currentContent.subtext}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-6 text-center">
          <AlertDialogAction
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            {currentContent.button}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CouponPopup;