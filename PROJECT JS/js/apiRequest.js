class ApiRequest {

    constructor(method, url, successFunc, errorFunc, data = null) {
        this.successFunc = successFunc;
        this.errorFunc = errorFunc;
        this.request = new XMLHttpRequest();
        this.request.open(method, url);
        this.request.send(null);
        this.request.onreadystatechange = () => this.onGetData();
    }
    onGetData() {
        if (this.request.readyState !== 4) {
            return;
        }
        if ((this.request.status >= 200) && (this.request.status < 300)) {
            this.successFunc(this.request.responseText);
        } else {
            this.errorFunc(this.request);
        }
    }

} 