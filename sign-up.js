const RULES = [{
    name : 'valid_min_8',
    /**
     * 
     * @param {String} password 
     * @returns Boolean
     */
    validator : function(password){
        return password.length >= 8;
    }
}, {
    name : 'valid_upper',
    validator : function(password){
        return password.toLowerCase() !== password;
    }
}, {
    name : 'valid_lower',
    validator : function(password){
        return password.toUpperCase() !== password;
    }
}, {
    name : 'valid_one_num',
    validator : function(password){
        for(let char of password){
            if(!isNaN(char)) return true;
        }
        return false;
    }
},{
    name : 'valid_special_char',
    validator : function(password){
        for(let char of password){
            if(char.charCodeAt(0) < 48) return true
        }
        return false;
    }
}];

window.onload = function(){
    document.getElementById('password').addEventListener('change', function(){
        let password = document.getElementById('password').value;
        validate(password);
    })
}


function validate(password){
    for(let rule of RULES){
        if(!rule.validator(password)) document.getElementById(rule.name).style.color = 'red';
        else document.getElementById(rule.name).style.color = 'green';
    }
}
