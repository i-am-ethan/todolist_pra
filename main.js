//フォームを取得
const form = document.getElementById("input-task");

//表示する場所をあらかじめ取得
const currentDiv = document.getElementById("current-div");

const pushButton = () => {
  const formValue = form.value;
  console.log(formValue);
  //新しくp要素を作る
  const newTask = document.createElement("p");
  //要素の中にvalueを設置する
  const newText = document.createTextNode(formValue);
  console.log(newText);
  //currentDiv配下にnewTextを設置
  currentDiv.appendChild(newTask).appendChild(newText);
};
