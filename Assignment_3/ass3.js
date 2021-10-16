/* Question One */
function add(a,b,callback){
   setTimeout(()=>{
    let sum = a +b ;
    callback(sum);
   },1000)
}
add(6,7,function (result) {
    console.log(result);
  })

  /* Question Two */

  const isAvailable = true;
  let promise = new Promise((resolve, reject)=>{
      if(isAvailable){ 
        resolve('Success');
      }else{
          reject('Fail')
      }
  });
  promise.then((result)=>{
      console.log(result);
  }).catch((error)=>{
      console.log(error);
  })

  /* Question Three */

  async function asynPro(){
    const asPromise = new  Promise((resolve,reject)=>{
        if(isAvailable){
            resolve('Success')
        }else{
            reject('Fail')
        }
    });
    let result = await asPromise;
    console.log(result);
  }
  asynPro();