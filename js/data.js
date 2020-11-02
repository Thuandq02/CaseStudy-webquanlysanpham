const PRODUCT = "product";
class Data {
    static products=[];
    static saveData(data,name){
        localStorage.setItem(name,JSON.stringify(data));
        //localStorage lưu lựi dữ liệu trong localStrorage.
        //JSON là viết tắt của JavaScript Object Notation, là một kiểu định dạng dữ liệu
        //tuân theo một quy luật nhất định mà hầu hết các ngôn ngữ lập trình hiện nay đều có thể đọc đc
    }
    static loadData(name){
        if(!localStorage.hasOwnProperty(name))return;
        let data = JSON.parse(localStorage.getItem(name));
        switch (name) {
            case PRODUCT:
                for (let i = 0; i < data.length; i++) {
                    this.products.push(data[i]);
                }
                break;
        }
    }
}