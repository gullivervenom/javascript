function Student(name, age) {
    // 1. this
    console.log(this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age} 세 입니다. `;
    }
}

// 생성자 함수를 사용해서 객체 생성하기
const student = new Student('박재민', 20);
console.log(student);