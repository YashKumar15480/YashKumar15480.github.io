/**
 * Tokenizer
 */
export const TOKEN_TYPE={
  WORD:"word",
  SPACE:"space",
  NEWLINE:"newline",
  PUNCTUATION:"punctuation"
};

let id=0;

function createToken(value,type,ignoreCase){
  return {
    id:id++,
    value,
    normalized:ignoreCase?value.toLowerCase():value,
    type
  };
}

export function tokenize(text,{ignoreCase=false,ignoreExtraSpaces=false}={}){
  id=0;
  if(ignoreExtraSpaces){
    text=text.replace(/[ \t]+/g," ");
  }

  const regex=/([A-Za-z0-9]+|\r\n|\n|[ ]|[^\w\s])/g;
  const matches=text.match(regex)||[];
  const tokens=[];

  for(const part of matches){
    if(part===" ") tokens.push(createToken(part,TOKEN_TYPE.SPACE,ignoreCase));
    else if(part==="\n"||part==="\r\n") tokens.push(createToken("\n",TOKEN_TYPE.NEWLINE,ignoreCase));
    else if(/^[A-Za-z0-9]+$/.test(part)) tokens.push(createToken(part,TOKEN_TYPE.WORD,ignoreCase));
    else tokens.push(createToken(part,TOKEN_TYPE.PUNCTUATION,ignoreCase));
  }

  return tokens;
}
