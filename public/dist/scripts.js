"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Person=function(){function e(n){_classCallCheck(this,e),this.name=n}return _createClass(e,[{key:"hello",value:function(){return"string"==typeof this.name?"Hello I am "+this.name+"!":"Hello"}}]),e}(),person=new Person("Yuriy"),greetHTML=templates.greeting({message:person.hello()});document.write(greetHTML);
"use strict";for(var max=10,i=0;max>i;i++)console.log(i);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmRhcnlTY3JpcHRzLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiUGVyc29uIiwibmFtZSIsInRoaXMiLCJ2YWx1ZSIsInBlcnNvbiIsImdyZWV0SFRNTCIsInRlbXBsYXRlcyIsIm1lc3NhZ2UiLCJoZWxsbyIsImRvY3VtZW50Iiwid3JpdGUiLCJtYXgiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWMsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUYxaEJrQixPQU1PLFdBTFgsUUFBQUEsR0FBYUMsR0FBTXJCLGdCQUFBc0IsS0FBQUYsR0FDakJFLEtBQUtELEtBQU9BLEVBc0JkLE1BWEFqQixjQUFhZ0IsSUFDWEosSUFBSyxRQUNMTyxNQUFPLFdBVlAsTUFBeUIsZ0JBQWRELE1BQUtELEtBQ2QsY0FBdUJDLEtBQUtELEtBQTVCLElBRU8sWUFnQkpELEtBWExJLE9BQVMsR0FBSUosUUFBTyxTQUNwQkssVUFBWUMsVUFBQSxVQUNkQyxRQUFTSCxPQUFPSSxTQUdsQkMsVUFBU0MsTUFBTUw7QUNsQmYsWUFDQSxLQUFLLEdBRERNLEtBQU0sR0FDRHZCLEVBQUksRUFBT3VCLElBQUp2QixFQUFTQSxJQUN4QndCLFFBQVFDLElBQUl6QiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIGhlbGxvICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAoYEhlbGxvIEkgYW0gJHsgdGhpcy5uYW1lIH0hYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnSGVsbG8nO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbignWXVyaXknKTtcbnZhciBncmVldEhUTUwgPSB0ZW1wbGF0ZXNbJ2dyZWV0aW5nJ10oe1xuICBtZXNzYWdlOiBwZXJzb24uaGVsbG8oKVxufSlcblxuZG9jdW1lbnQud3JpdGUoZ3JlZXRIVE1MKTtcbiIsInZhciBtYXggPSAxMDtcbmZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcblx0Y29uc29sZS5sb2coaSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
