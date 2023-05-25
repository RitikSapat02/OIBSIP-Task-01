function fun() {
  if (eval(cal.display.value) != undefined) {
    if (eval(cal.display.value) == Infinity) alert("Cannot divide by 0");
    else if (!eval(cal.display.value)) alert("can't perform 0/0");
    else
      cal.display.value = `${cal.display.value} = ${eval(cal.display.value)}`;
  }
}
