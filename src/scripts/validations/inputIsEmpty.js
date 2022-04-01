function inputIsEmpty(userName) {
    if (userName.length == 0) {
      alert("Preencha o campo com o nome do usuário!");
      return true;
    }
  }

export { inputIsEmpty };