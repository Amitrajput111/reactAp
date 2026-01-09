import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const getGreeting = () => {
    if (hours < 12) return "Good Morning";
    if (hours < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="clock-container">
      <div className="greeting mb-4">
        <h3 className="text-white">{getGreeting()}! 🌅</h3>
      </div>
      
      <div className="clock-display">
        <div className="time-section">
          <div className="time-digits">
            {String(hours).padStart(2, "0")}
            <span className="blink">:</span>
            {String(minutes).padStart(2, "0")}
            <span className="blink">:</span>
            {String(seconds).padStart(2, "0")}
          </div>
          <div className="ampm">
            {hours >= 12 ? "PM" : "AM"}
          </div>
        </div>
      </div>

      <div className="date-section mt-4">
        <div className="date-display">
          <i className="bi bi-calendar3 me-2"></i>
          {formatDate(time)}
        </div>
        <div className="timezone mt-2">
          <i className="bi bi-globe-asia-australia me-2"></i>
          Indian Standard Time (IST)
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
