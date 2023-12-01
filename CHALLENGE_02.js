// compiler("&##&")
// compiler("&##&*&@&")
const mensaje = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

const operaciones = {
  "#": num => num+= 1 ,
  "@": num => num-= 1,
  "*": num => num*=num,
  "&": num => num
}

function compiler(cadena) {
  let num = 0
  let result = ''
  for(valor of cadena){
    num= operaciones[valor](num)
    if(valor === "&"){
      result += num
    }
  }
  return result
}

console.log(compiler(mensaje))