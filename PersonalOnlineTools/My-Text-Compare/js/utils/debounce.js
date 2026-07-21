export function debounce(fn, delay=250){
 let t;
 return (...args)=>{
   clearTimeout(t);
   t=setTimeout(()=>fn(...args),delay);
 };
}
