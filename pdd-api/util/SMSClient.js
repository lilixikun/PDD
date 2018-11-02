const SMSClient = require('@alicloud/sms-sdk');
const accessKeyId = 'LTAIn4GbotypOk4V';
const secretAccessKey = 'flCEOy6yNPrmNDRSgYd13n304KgDon';

function sendSmsClient(code) {
    let smsClient = new SMSClient({
        accessKeyId,
        secretAccessKey
    });
    //发送短信
    smsClient.sendSMS({
        PhoneNumbers: '18717106476',
        SignName: '安徽大粮',
        TemplateCode: 'SMS_149421290',
        TemplateParam: `{"code":${code}}`
    }).then(function (res) {
        return res;
    }, function (err) {
        console.log(err);
        return err;
    })
}

exports.sendSmsClient = sendSmsClient;