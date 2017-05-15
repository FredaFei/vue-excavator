import {isLegalPhone, isLegalPassword, isLegalValidate,isLegalName} from 'js/validata.js'

class validataMsg{
    static validataName(name){
        return isLegalName(name)
    }
}
export default validataMsg