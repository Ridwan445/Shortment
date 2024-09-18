const guest = require('../models/guest.model') 
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')


const uploadvalidId =  async (req, res) => {
  try {
  const { nationalid, driverlicense, passport } = req.body;

  
  const validid = await cloudinary.uploader.upload.single(req.file.path, {
    folder: 'validId'
  });

  const newvalidid = new validid ({
    nationalid: nationalid,
    driverlicense: driverlicense,
    passport: passport
  })

  await newvalidid.save();
  res.status(201).json({ message: 'Validid uploaded successfully' });

  } catch (error) {
    res.status(500).json('internal server error')
  }}

const fetchProperties = async (req, res) => {
  try {
    const allProperties = await property.find({});

    return res.status(200).json({ message: 'Properties:', allProperties});

  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
}

const search = async (req, res) => {
    try {
        const { location, description } = req.query;
        

        const searchResult = await property.findOne({location: location, description: description, beds: beds })

        if (!property){
            return res.status(404).json({ message: 'property not found'})
        }


    } catch (error) {
        return res.status(500).json('internal sever error')
    }
}




const booking =  async (req, res) => {
  
  try {
    const { guestId, hostId, checkInDate, checkOutDate } = req.body;

    
    if (!guestId || !hostId || !checkInDate || !checkOutDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    
    if (!apartments[apartmentId]) {
      return res.status(404).json({ message: 'Apartment not found' });
    }
  
    
    const isBooked = hostId.bookings.some(booking => {
      const existingCheckIn = new Date(booking.checkInDate);
      const existingCheckOut = new Date(booking.checkOutDate);
      const newCheckIn = new Date(checkInDate);
      const newCheckOut = new Date(checkOutDate);
  
      
      return (newCheckIn < existingCheckOut && newCheckOut > existingCheckIn);
    });
  
    if (isBooked) {
      return res.status(400).json({ message: 'Apartment is already booked for the requested dates' });
    }
  
    
    const newBooking = {
      guestId,
      checkInDate: Date.now(),
      checkOutDate: new Date
    };
    hostId.bookings.push(newBooking);
    hostId.booked = true; 

    await booking.save();
  
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  
    
  } catch (error) {
    return res.status(500).json('internal server error');
    
  }
} 

   const history = async (req, res) => {
    try {
      
      
    } catch (error) {
      
    }
   }

  
module.exports = { search, booking, fetchProperties, uploadvalidId, history}