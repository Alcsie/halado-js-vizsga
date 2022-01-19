class Project {
    oldestCarBtn;
    after2004Btn;
    searchField;
    searchCarBrandBtn;
    resultTbody;

    constructor() {
        this.oldestCarBtn = document.getElementById('oldestCarBtn');
        this.after2004Btn = document.getElementById('after2004Btn');
        this.searchCarBrandBtn = document.getElementById('searchCarBrandBtn');
        this.searchField = document.getElementById('searchField');
        this.resultTbody = document.getElementById('resultTbody');
    }
}

const projectObject = new Project();