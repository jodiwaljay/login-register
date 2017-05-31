
  function required(value){
    if(value && value.trim() !== ''){
      return undefined
    }
    return 'Required'
  }

  function email(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined
  }

  function number(value){
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined
  }

  function minLength(min){
    return function(value){
      return value && value.length < min ? `Must be ${min} characters or more` : undefined;
    }
  }

  function maxLength(max){
    return function(value){
      return value && value.length > max ? `Must be ${max} characters or more` : undefined;
    }
  }

  function minValue(min){
    return function(value){
      return value && value < min ? `Must be at least ${min}` : undefined
    }
  }


export default {required, email, minLength, maxLength, minValue, number};
