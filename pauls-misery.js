
function paul(x){
    let score = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'kata' ) {
        score = score + 5
    }else if(x[i] == 'Petes kata') {
        score = score + 10
    } else if(x[i] == 'eating') {
        score = score + 1
    }
      console.log('score ' + score);
      console.log(x[i]);
  }
  if(score < 40) return 'Super happy!';
  if(score >= 40 && score < 70) return 'Happy!';
  if(score >= 70 && score < 100) return 'Sad!';
  return 'Miserable!'
}

// console.log(paul(['life', 'eating', 'life']))
// console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']))
// console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']))
console.log(paul(['eating','Petes kata','eating','Petes kata','eating','kata','Petes kata','kata','kata','kata','life','eating','eating','eating','Petes kata','Petes kata','kata','kata','Pete kata','eating','eating','kata','eating','Petes kata','eating','kata','eating','life','eating','eating','kata']))

// Using object and reduce 
function paul(arr){
    const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
    const num = arr.reduce( (a, i)=> +a + dic[i], 0)
    return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
  }