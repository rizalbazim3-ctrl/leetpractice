var isValid = function(word) {

    if(/[BCDFGHJKLMNPQRSTVWXYZ]/i.test(word) && /[aeiou]/i.test(word)
         && word.length >= 3 && /^[a-zA-Z0-9]+$/.test(word)){
        return true
    }else{
        return false
    }
    
};
