function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
  }

  secondFunc();  // someInt jest zadeklarowania poza funkcją secondFunc, więc secondFunc nie ma do niej dostępu

  console.log(otherInt); // otherInt jest zadeklarowana w funkcji wewnątrz funkcji firstFunc więc ma dostęp
}

firstFunc();