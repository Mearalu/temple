# temple

模拟ES6的模板字符串,以及自己使用的字符串格式化工具
(取这个名字仅仅是防止变量名冲突问题)

#####初始化
```javascript
    var a = '中文test';
    var arrayTest = [1, "20150107", '中文'];
    var obj = {"a": a, "array Test": arrayTest};
    var testData = {"a": a, "array Test": arrayTest, "obj": obj};
```
##### 模拟ES6模板字符串
```javascript
     var pie1 = document.createElement('pre');
     document.body.appendChild(pie1);
     pie1.innerHTML = temple.ES6('变量测试${a} \n' +
      '数组测试 ${arrayTest[1]} \n' +
       '对象或者说map测试${obj["array Test"][1]}');
 ```
 #####这是自己使用的字符串格式化工具
 ```javascript
      var pie2 = document.createElement('pre');
      document.body.appendChild(pie2);
      pie2.innerHTML = temple.build('变量测试${a} \n' +
       '数组测试 ${arrayTest.1} \n' +
        '对象或者说map测试${obj.array Test.1}', testData);
  ```