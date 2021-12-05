var payBalance = document.querySelector('#payBalance');
var addBalance = document.querySelector('#addBalance');
var showBalance = document.querySelector('#showBalance')

class DomElements {
    _username = document.querySelector('#userName');
    _balancecontent = document.querySelector('#balanceContent');
    _userInput = document.querySelector('#my-account');

}


class BankAccount extends DomElements {
    fullname;
    _balance;

    constructor(username) {
        super()
        this.fullname = username;

    }

    getWelcomeBank() {
        this._username.innerHTML = `Hörmətli <strong>${this.fullname}</strong> Kapital Banka Xoş Gəlmisiniz`
    }


    setBalance(money) {
        if (money < 0 && money !== 'number' && !money) {
            alert('Duzgun yazin.Pul 0 ola bilmez')
            return
        }
        this._balance = money
    }

    getShowBalance() {
        this._balancecontent.classList.remove('d-none')
        this._balancecontent.innerHTML = `Sizin balans: ${this._balance} ₼`;
    }

    setAddBalance() {
        this._balancecontent.classList.add('d-none')
        var daxilolunanpul = parseInt(this._userInput.value)

        if (!daxilolunanpul || daxilolunanpul <= 0) {
            alert('Zehmet olmasa pulu duzgun daxil edin.Pul 0 ola bilmez')
            this._userInput.value = ''
            return
        }
        this._balance += daxilolunanpul
        this._userInput.value = '';
        alert(`Sizin balansiniza ${daxilolunanpul} ₼ elave olundu`)
        this.showBalance()
    }

    setPayBalance() {
        this._balancecontent.classList.add('d-none')

        var daxilolunanpul = parseInt(this._userInput.value)

        if (!daxilolunanpul || daxilolunanpul > this._balance) {
            alert('Zehmet olmasa pulu duzgun daxil edin')
            this._userInput.value = ''
            return
        }
        this._balance -= daxilolunanpul
        this._userInput.value = '';
        alert(`Sizin balansinizdan ${daxilolunanpul} ₼ odeme ucun pul cixildi`)

        this.showBalance()
    }

}





var personMuradAccount = new BankAccount('Murad')
personMuradAccount.setBalance(1000);

showBalance.addEventListener('click', () => personMuradAccount.getShowBalance())
addBalance.addEventListener('click', () => personMuradAccount.setAddBalance())
payBalance.addEventListener('click', () => personMuradAccount.setPayBalance())


window.onload = personMuradAccount.getWelcomeBank();