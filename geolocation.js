angular.module('ngGeolocation',[])
  .factory('geolocation',
        ["$q","$rootScope"
function ($q , $rootScope) {
  return {
    position: function () {
      var deferred = $.defer()
      navigator.geolocation.getCurrentPosition(function (pos) {
        $rootScope.$apply(function () {
          deferred.resolve(pos)
        })
      })
      return deferred.promise
    }
  }
})