function isLegalPhone(str){
  return /^1[3-9]\d{9}$/g.test(str);
}
// 密码（长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种）
function isLegalPassword(str){
  if(str.length < 6 || str.length > 16){
    return false;
  }
  // 如果包含上述四种以外的字符，false
  if(/[^A-Za-z_0-9]/.test(str)){
    return false;
  }
  //如果全为大写、小写、下划线、数字, false
  if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
    return false;
  }
  return true;
}

function isLegalValidate(str){
  return /^[a-z0-9]{4}$/g.test(str);
}

function isLegalName(str){
  return /^[a-zA-Z0-9_]{2,8}$/g.test(str);
}

export{isLegalPhone, isLegalPassword, isLegalValidate, isLegalName};