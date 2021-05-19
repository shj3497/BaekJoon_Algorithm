```javascript
// JavaScript에서는 replaceAll이라는 함수가 없으므로 String클래스에 메소드를 추가할 수 있다.
String.prototype.replaceAll = function (org, dest) {
  return this.split(org).join(dest);
};
```
