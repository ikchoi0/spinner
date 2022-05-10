let spinString = "|/-\\|";
for(let i = 0; i < spinString.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + spinString[i] + "   ");
  }, (i + 1) * 100);
};