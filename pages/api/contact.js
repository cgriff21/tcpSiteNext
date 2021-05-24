import axios from 'axios';

  export const config = {
    api: {
      externalResolver: true,
    },
  }
  
export default function handler(req, res) {
  let statusMsg;

  if (req.body.email != '')
    {
      axios.post('https://hooks.zapier.com/hooks/catch/2517105/byjfe8j', {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message

      }).then(function (response) {
        statusMsg = response.data.status
        res.status(200).json({success: statusMsg})
      })
      .catch(function (error) {
        statusMsg = error
        res.status(400).json({success: statusMsg})
      });
    }else {
      res.status(400).json({success: "no email"})
    }
}