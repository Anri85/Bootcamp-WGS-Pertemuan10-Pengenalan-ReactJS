import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        // inisialisasikan sebuah state dengan nama time dan nilai awal berupa new Date()
        this.state = { time: new Date() };
    }

    // saat komponen telah dirender maka jalankan funsi dibawah
    componentDidMount() {
        // membuat sebuah interval sehingga nilai dalam state akan diperbaharui setiap 1 detik
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    // saat komponen akan dihapus dari DOM maka hapus juga interval yang telah dibuat sebelumnya
    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        return <span>{this.state.time.toLocaleTimeString()}</span>;
    }
}

export default Clock;
