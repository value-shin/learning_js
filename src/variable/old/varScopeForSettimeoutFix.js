for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); //> ??
    }, (i + 1) * 1000);
  })(i);
}

