import mailer from 'react-native-smtp-mailer';
import {SuccessOtp, failSenOtp} from '../validateForm';

export const mailerOtp = async (email, noHp, otp_code) => {
  console.log(email, noHp, otp_code);
  return mailer
    .sendMail({
      mailhost: 'mail.laportipidter.com',
      port: '465',
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      Authentication: 'OAuth2',
      username: 'no-reply@laportipidter.com',
      password: 'Pokolo159!',
      from: 'Lapor TIpidter',
      recipients: `${email}`,
      subject: 'OTP Lapor Tipidter',
      htmlBody:
        '<div style="font-family: Helvetica,Arial,sans-serif; min-width: 1000px; overflow: auto; line-height: 2;">' +
        '<div style="width: 100%; padding: 20px 0;">' +
        '<div style="border-bottom: 1px solid #eeeeee; text-align: left;"><span style="font-family: tahoma, arial, helvetica, sans-serif;"><a style="font-size: 1.4em; color: #218c74; text-decoration: none; font-weight: 600;">Lapor Tipidter</a></span></div>' +
        '<p style="font-size: 1.1em; text-align: left;"><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 12pt;">Halo,</span><br /><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 12pt;">Berikut adalah Kode OTP untuk masuk ke dalam aplikasi Lapor Tipidter:</span></p>' +
        '<h2 style="background: #218c74; width: max-content; padding: 0px 10px; color: #ffffff; border-radius: 4px; text-align: justify;"><span style="font-family: tahoma, arial, helvetica, sans-serif;">' +
        otp_code +
        '</span></h2>' +
        '<p style="font-size: 0.9em; text-align: left;"><span style="font-size: medium; font-family: tahoma, arial, helvetica, sans-serif;">OTP ini berlaku selama 5 menit sejak email ini dikirim.&nbsp;</span></p>' +
        '<hr style="border: none; border-top: 1px solid #eee;" />' +
        '<div style="float: left; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300;">' +
        '<p><span style="font-family: tahoma, arial, helvetica, sans-serif;">Catatan:<br />1. kode OTP ini hanya untuk ' +
        noHp +
        ' dan bersifat rahasia, tidak boleh dikirim ke pihak siapapun.<br />2. Harap tidak membalas email ini, email ini dikirim otomatis melalui sistem.<br /></span></p>' +
        '</div>' +
        '</div>' +
        '</div>',
    })
    .then((ress) => {
      console.log('sendEmail', ress);
      SuccessOtp();
      return ress;
    })
    .catch((err) => {
      failSenOtp(err);
      return console.log('errorMail', err);
    });
};
