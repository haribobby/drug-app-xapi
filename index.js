const express = require('express')

const app = express();



const druglist = [
    {
      id: 'd1',
      title: 'Crocin',
      amount: 14.12,
      isPopular: true,
      desc: 'Crocin Advance is the best medicine for Joint, knee, muscles and other pains which provide fast and effective relief. It is suitable for adults as well as',
    },
    {
      id: 'd2',
      title: 'Zincovit',
      amount: 4.12,
      isPopular: false,
      desc: 'It is a nutritional supplement that restores the amount of vitamins and minerals in your body and helps to improve your overall health.',
    },
    {
      id: 'd3',
      title: 'Lipitor',
      amount: 194.28,
      isPopular: false,
      desc: 'LIPITOR is a prescription medicine that lowers cholesterol in the blood. It lowers the LDL-C ("bad" cholesterol) and triglycerides in your blood',
    },
    {
      id: 'd4',
      title: 'Sildenafil  ',
      amount: 694.88,
      isPopular: true,
      desc: 'Sildenafil is used to treat  function problems (impotence or erectile dysfunction-ED). In combination with sildenafil works',
    }
  ];

app.get('/', (req, res) => {
    res.send("Hello Express!");
});

app.get('/api/drugs', (req, res) => {
    res.send(druglist);
})


app.listen(8000, ()=> { console.log('Server is listeing on port 8000')});