import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import emailjs from '@emailjs/browser';
import ecellLogo from './assets/ecell white.png';
import StarryBackground from './comingsoon/component/StarryBackground';
import { db, collection, addDoc, getDocs } from './firebase';
import './coming_soon.css';

function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  const launchDate = new Date('2025-03-01T12:00:00').getTime();

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'subscribers'));
        setSubscribers(querySnapshot.docs.map((doc) => doc.data().email));
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    fetchSubscribers();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || subscribers.includes(email)) {
      alert('Invalid or duplicate email!');
      return;
    }

    try {
      await addDoc(collection(db, 'subscribers'), { email });
      setSubscribers([...subscribers, email]);
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Try again.');
    }
  };

  const sendNotificationEmails = async () => {
    try {
      emailjs.init('plht_CCBGYunCZTkB');

      const subscriberList = subscribers.join(', ');

      await emailjs.send(
        'service_uvh2snf',
        'template_61jny0h',
        {
          to_email: 'mkp151203@gmail.com',
          event_name: 'E-summit2025',
          subscribers: subscriberList,
        },
        'plht_CCBGYunCZTkB'
      );

      console.log('Notification email sent successfully with all subscribers!');
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  };

  const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      sendNotificationEmails();
      return (
        <div className="countdown-completed">
          <p>E-Summit 2025 is Live!</p>
          <a href="https://www.ecellvitbhopal.in/esummit2025" target="_blank" rel="noopener noreferrer">
            <button className="live-button">Visit Now</button>
          </a>
        </div>
      );
    }
  

    return (
      <div className="countdown-container">
        <div className="countdown-box">
          <div className="countdown-time">{days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-time">{hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-time">{minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-time">{seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div className="comingsoon-container">
      <StarryBackground starCount={200} trailCount={3} />
      <div className="comingsoon-content">
        <h1 className="comingsoon-title">E-Summit'25</h1>
        <p className="comingsoon-subtitle">
          The Biggest Entrepreneurship Summit is Coming Soon
        </p>

        <div className="countdown-wrapper">
          <Countdown date={launchDate} renderer={CountdownRenderer} />
        </div>

        <div className="subscription-container">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="subscription-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscription-input"
                required
              />
              <button type="submit" className="subscription-button">
                Notify Me
              </button>
            </form>
          ) : (
            <div className="subscription-success">
              <p>Thanks for subscribing! You'll be notified.</p>
            </div>
          )}
        </div>

        <div className="organized-by">
          <p>Organized by</p>
          <a href="https://ecellvitbhopal.in" target="_blank" rel="noopener noreferrer">
            <img src={ecellLogo} alt="E-Cell Logo" className="ecell-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
