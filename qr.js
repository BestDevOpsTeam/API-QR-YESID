const QRCode = require('qrcode');

const generateQR = async text => {

    
    let qr = '';
    try {
        qr = await QRCode.toDataURL(text);
        qr = qr.substring(22);
        return qr;
    } catch (err) {
        console.error('mi error', err);
        return 'Error';
    }
}

module.exports = generateQR