app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pineapple & Ham Pizza',
      description: 'Delicious cheese pizza with SpongeBob\'s favorite fruit & pork ham, baby.',
      price: 11.99
    },
    {
      name: 'T-Bone Steak',
      description: 'Grilled to perfection ...',
      price: 14.99
      
    },
    {
      name: 'Milksteak',
      description: 'Charlie Kelly\'s favorite romantic meal, you\'ll impress your date and most certainly will get laid with this dish.',
      price: 7.99
    }   
  ];
  
  $scope.extras = [
    {
      name: 'French Fries',
      description: 'A true American classic (or is it French?)?',
      price: 2.49     
    },
    {
      name: 'Onion Rings',
      description: 'Fried in beer batter. Absolutely delicious ... and crunchy!',
      price: 3.99
    },
    {
      name: 'Coleslaw',
      description: 'This doesn\'t go at all with the rest of the menu, but hey, why not?',
      price: 2.99
		}
  ];

}]);
