```javascript
// JavaScript에서는 replaceAll이라는 함수가 없으므로 String클래스에 메소드를 추가할 수 있다.
String.prototype.replaceAll = function (org, dest) {
  return this.split(org).join(dest);
};
```

- map함수는 break가 걸리지 않는다.
- [1316번](./1316.js)

```javascript
// 1 abacc 를 실행하면 그룹단어라고 인식한다.
word_char.map((char) => {
  const f_index = word.indexOf(char);
  const l_index = word.lastIndexOf(char);

  if (f_index !== l_index) {
    for (let j = f_index; j <= l_index; j++) {
      if (word.charAt(j) === char) {
        bool = true;
      } else {
        bool = false;
        break; // break 안걸림
      }
    }
  } else {
    bool = true;
  }
});
```
