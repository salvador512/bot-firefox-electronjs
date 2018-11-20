var app  = angular.module("app",[]);
var api = 'https://firefox-bot.herokuapp.com'
app.controller("MainController",function($scope,$http) {
  $scope.quantity = 5;
  $scope.n_users = 0
  $scope.index = index;
  $scope.users = [];
  $scope.macro1 = "";
  $scope.macro2 = "";
  $scope.newuser = {status:true};
  $scope.removeUser = remove;
  $scope.deleteUser = deleteUser;
  $scope.createUser = createUser;
  $scope.updateUser = updateUser;
  $scope.create = create;
  $scope.activate = activate;
  $scope.encode = encode;
  $scope.getIIM = getIIM;  
  $scope.m64 = "";  
  $scope.addTimers = addTimers
  $scope.waitTime = 2
  $scope.getIP = getIP;
  $scope.IP = IP;
  $scope.ip_dir = ""
  $scope.workers = 0
  $scope.workersStatus = true
  $scope.getWorkers = getWorkers;
  $scope.resetWorkers = resetWorkers;


  function index() {
      return $http({
        method: 'GET',
        url: api + '/api/users'
        }).then(function successCallback(response) {
            return response.data.user
          }, function errorCallback(response) {
            throw error.data
          });
  } 

  function IP() {
      return $http({
        method: 'GET',
        url: 'http://ip-api.com/json'
        }).then(function successCallback(response) {
            return response.data
          }, function errorCallback(response) {
            throw error.data
          });
  } 

function  getIP() {
    IP().then(function(response) {
         $scope.ip_dir = response
  })
}   

  function deleteUser(id) {
      console.log(id);
      return $http({
        method: 'DELETE',
        url: api + '/api/user/'+id
        }).then(function successCallback(response) {
              activate();
          }, function errorCallback(response) {
            throw error.data
          });
  }    

  function create(user) {
      return $http({
        method: 'POST',
        url: api + '/api/user',
        data: user
        }).then(function successCallback(response) {
              activate();
          }, function errorCallback(response) {
            throw error.data
          });
  }   

  function update(user) {
      user.status = !user.status
      return $http({
        method: 'PUT',
        url: api + '/api/user/'+user._id,
        data: user
        }).then(function successCallback(response) {
              activate();
          }, function errorCallback(response) {
            throw error.data
          });
  }   

function createUser(user) {
  console.log(user);
  create(user).then(function(user) {
    $scope.newuser = {};
    activate()
  })
}

function remove(id) {
  deleteUser(id).then(function(id) {
    activate()
  })
}
function updateUser(user) {
  update(user).then(function(user) {
    activate()
  })
}
function activate() {
  index().then(function(data) {
    $scope.users = data;
    $scope.n_users = data.filter(function(value) { return value.status === true }).length;
  })
  readIIM('scripts/login.iim').then(function(data) {
      $scope.macro1 = data
      encode($scope.macro1,'a')
      encode($scope.macro2,'b')
  })
  getIP()

}

function encode(macro,output) {
  if (output=='a') {
  $scope.m64= btoa(encodeURIComponent($scope.macro1))    
  }
  if (output=='b') {
  $scope.macro2 = addTimers($scope.macro2)
  $scope.m64b = btoa(encodeURIComponent($scope.macro2))   
  
  }  
}

function addTimers(model) {
  if (model != "") {
    // console.log(model)
    buffer = model.split("\n")
    // console.log(buffer);

    for (var i = 0 ; i <= buffer.length -1; i++) {
      // console.log(buffer[i]);
      if ( buffer[i].includes("URL GOTO=")) {
        buffer[i] = buffer[i]+"\n WAIT SECONDS=2"
      }
      if ( buffer[i].includes("TAG POS")) {
        buffer[i] = buffer[i]+"\n WAIT SECONDS="+$scope.waitTime
      }      

    }
    // console.log(buffer.length);
    todo=""
    for(var i = 0 ; i <= buffer.length -1; i++){
      todo = todo +buffer[i] + "\n"
    }

    return todo    
  }

}

function  getIIM(argument) {
    readIIM(argument).then(function(argument) {
         $scope.macro1 = getIIM('scripts/login.iim')
  })
}

function  readIIM(argument) {
      return $http({
        method: 'GET',
        url: argument
        }).then(function successCallback(response) {
            return response.data
          }, function errorCallback(response) {
            throw error.data
          });}

function getWorkers() {
  $scope.workers = parseInt($scope.n_users)
  console.log($scope.workers);
  if ($scope.workers > 0) {
    $scope.workersStatus  = false
    console.log($scope.workersStatus );
  }
}

function resetWorkers() {
  $scope.workers = 0
  $scope.workersStatus = true
}


// Inicio
  activate();



})

