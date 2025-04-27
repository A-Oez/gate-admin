import { watch } from 'vue';

export function validateRoutes(route, validations, errorMessage){
    validatePublicPath(route.value.public_path)
    validateMethod(route.value.method)
    validateServiceHost(route.value.service_host)
    validateServicePath(route.value.service_path)
    validateServiceScheme(route.value.service_scheme)
    
    //keys for watcher 
    const fields = [
        { key: 'public_path', validate: validatePublicPath },
        { key: 'method', validate: validateMethod },
        { key: 'service_host', validate: validateServiceHost },
        { key: 'service_path', validate: validateServicePath },
        { key: 'service_scheme', validate: validateServiceScheme },
    ];
    fields.forEach(({ key, validate }) => {
        validate(route.value[key]); //get validation implementation from route field
        watch(() => route.value[key], (newValue) => { //add watcher to route values 
          validate(newValue);
        });
    });

    //validation functions

    function validatePublicPath(public_path){
        if(public_path.length == 0){
            validations.value.public_path = true
            errorMessage.value.public_path = "This field cannot be empty!"
        } else if(public_path.substring(0,4) != "/api"){
            validations.value.public_path = true
            errorMessage.value.public_path = "Public path must start with /api"
        } else {
            validations.value.public_path = false;
            errorMessage.value.public_path = "";
        }
    }

    function validateMethod(method){
        if(method.length == 0){
            validations.value.method = true
            errorMessage.value.method = "This field cannot be empty!"
        } else if(method.length > 10){
            validations.value.method = true
            errorMessage.value.method = "Maximum 10 characters allowed!"
        } else {
            validations.value.method = false;
            errorMessage.value.method = "";
        }
    }

    function validateServiceHost(service_host){
        if(service_host.length == 0){
            validations.value.service_host = true
            errorMessage.value.service_host = "This field cannot be empty!"
        } else {
            validations.value.service_host = false;
            errorMessage.value.service_host = "";
        }
    }

    function validateServicePath(service_path){
        if(service_path.length == 0){
            validations.value.service_path = true
            errorMessage.value.service_path = "This field cannot be empty!"
        } else {
            validations.value.service_path = false;
            errorMessage.value.service_path = "";
        }
    }

    function validateServiceScheme(service_scheme){
        if(service_scheme.length == 0){
            validations.value.service_scheme = true
            errorMessage.value.service_scheme = "This field cannot be empty!"
        } else if(service_scheme.length > 10){
            validations.value.service_scheme = true
            errorMessage.value.service_scheme = "Maximum 10 characters allowed!"
        } else {
            validations.value.service_scheme = false;
            errorMessage.value.service_scheme = "";
        }
    }
}
