var root = document.documentElement;

console.log(root);
console.log(root.style);
console.log(root.classList);

if ( 'textShadow' in root.style ) {
  root.classList.add('textshadow');
} else {
  root.classList.add('no-textshadow');
}

// Test for multiple properties
function testProperty( property ){
  var root = document.documentElement;

  if ( property in root.style ) {
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add( 'no-' + property.toLowerCase() );
  return false;

}

testProperty('boxShadow');

// Test a value

function testValue(id,value,property){
  var dummy = document.createElement('p');
  dummy.style[property] = value;

  if ( dummy.style[property] ) {
    root.classList.add(id);
    return true;
  }

  root.classList.add('no-' + id);
  return false;
}
