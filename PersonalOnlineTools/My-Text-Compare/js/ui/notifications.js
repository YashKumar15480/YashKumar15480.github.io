export function showStatus(element,message,isError=false){
  if(!element) return;
  element.textContent=message;
  element.classList.toggle("error",isError);
}

export function flashButton(button,text="✓ Copied",duration=1500){
  if(!button) return;
  const old=button.textContent;
  button.textContent=text;
  setTimeout(()=>button.textContent=old,duration);
}
