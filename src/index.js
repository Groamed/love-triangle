/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var unic = 0;
  var reff = 0,refs = 0,reft = 0;
  for(var i = 0;i<preferences.length;i++)
  {
    reff = preferences[i] - 1;
    refs = preferences[reff] - 1;
    reft = preferences[refs] - 1;
    if(reff==refs)
      continue;
    if(i==reft)
    {
      preferences[refs] = 0;
      preferences[reff] = 0;
      preferences[i] = 0;
      unic++;
    }
  }
  return unic;
};
