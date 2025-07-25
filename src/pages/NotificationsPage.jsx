
import { useState, useEffect } from 'react';
import { FaBell, FaTrophy, FaExclamationTriangle, FaInfoCircle, FaCheck, FaTrash, FaCog } from 'react-icons/fa';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // =========================================================================
    // API CALL PLACEHOLDER 1: Fetch notifications from Django backend
    // Replace this dummy data with: fetch('/api/notifications/')
    // Expected response format: Array of notification objects
    // =========================================================================
    const fetchNotifications = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/notifications/');
        // const data = await response.json();
        
        // Dummy data for development
        const dummyNotifications = [
          {
            id: 1,
            type: 'league_invite',
            title: 'League Invitation',
            message: 'You have been invited to join "Champions League 2024" by John Doe',
            timestamp: '2024-01-15T10:30:00Z',
            is_read: false,
            icon: 'trophy',
            action_url: '/join_league/123'
          },
          {
            id: 2,
            type: 'prediction_reminder',
            title: 'Prediction Reminder',
            message: 'Don\'t forget to make your predictions for this weekend\'s matches!',
            timestamp: '2024-01-15T09:15:00Z',
            is_read: false,
            icon: 'warning',
            action_url: '/predictions'
          },
          {
            id: 3,
            type: 'score_update',
            title: 'Prediction Result',
            message: 'Your prediction for Arsenal vs Chelsea was correct! You earned 3 points.',
            timestamp: '2024-01-14T20:45:00Z',
            is_read: true,
            icon: 'check',
            action_url: '/dashboard'
          },
          {
            id: 4,
            type: 'league_update',
            title: 'League Position Change',
            message: 'You moved up to 3rd place in "Weekend Warriors" league!',
            timestamp: '2024-01-14T18:20:00Z',
            is_read: true,
            icon: 'trophy',
            action_url: '/leaderboard'
          },
          {
            id: 5,
            type: 'system_info',
            title: 'New Feature Available',
            message: 'Check out the new enhanced prediction statistics on your dashboard!',
            timestamp: '2024-01-13T15:00:00Z',
            is_read: false,
            icon: 'info',
            action_url: '/dashboard'
          }
        ];
        
        setNotifications(dummyNotifications);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (notificationId) => {
    // =========================================================================
    // API CALL PLACEHOLDER 2: Mark notification as read
    // Replace with: fetch(`/api/notifications/${notificationId}/mark-read/`, { method: 'POST' })
    // =========================================================================
    try {
      // TODO: Replace with actual API call
      // await fetch(`/api/notifications/${notificationId}/mark-read/`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId ? { ...notif, is_read: true } : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const deleteNotification = async (notificationId) => {
    // =========================================================================
    // API CALL PLACEHOLDER 3: Delete notification
    // Replace with: fetch(`/api/notifications/${notificationId}/`, { method: 'DELETE' })
    // =========================================================================
    try {
      // TODO: Replace with actual API call
      // await fetch(`/api/notifications/${notificationId}/`, {
      //   method: 'DELETE'
      // });
      
      setNotifications(prev => prev.filter(notif => notif.id !== notificationId));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const markAllAsRead = async () => {
    // =========================================================================
    // API CALL PLACEHOLDER 4: Mark all notifications as read
    // Replace with: fetch('/api/notifications/mark-all-read/', { method: 'POST' })
    // =========================================================================
    try {
      // TODO: Replace with actual API call
      // await fetch('/api/notifications/mark-all-read/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      setNotifications(prev => 
        prev.map(notif => ({ ...notif, is_read: true }))
      );
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const getNotificationIcon = (iconType) => {
    const iconClass = "text-2xl";
    switch (iconType) {
      case 'trophy':
        return <FaTrophy className={`${iconClass} text-yellow-400`} />;
      case 'warning':
        return <FaExclamationTriangle className={`${iconClass} text-orange-400`} />;
      case 'check':
        return <FaCheck className={`${iconClass} text-green-400`} />;
      case 'info':
        return <FaInfoCircle className={`${iconClass} text-blue-400`} />;
      default:
        return <FaBell className={`${iconClass} text-gray-400`} />;
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.is_read;
    if (filter === 'read') return notif.is_read;
    return true;
  });

  const unreadCount = notifications.filter(notif => !notif.is_read).length;

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="bg-green-500/80 rounded-xl p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-green-500 rounded w-1/3"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-green-500 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* Header */}
      <div className="bg-green-500/80 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FaBell className="text-3xl text-white" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Notifications
              {unreadCount > 0 && (
                <span className="ml-3 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={markAllAsRead}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              disabled={unreadCount === 0}
            >
              <FaCheck className="text-sm" />
              Mark All Read
            </button>
            <FaCog className="text-white text-xl cursor-pointer hover:text-green-200 transition-colors" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          {['all', 'unread', 'read'].map(filterType => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 capitalize ${
                filter === filterType
                  ? 'bg-white text-green-700 shadow-lg'
                  : 'text-white hover:bg-green-600'
              }`}
            >
              {filterType}
              {filterType === 'unread' && unreadCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-green-500/80 rounded-xl p-6">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <FaBell className="text-6xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {filter === 'unread' ? 'No unread notifications' : 
               filter === 'read' ? 'No read notifications' : 'No notifications'}
            </h3>
            <p className="text-gray-300">
              {filter === 'all' ? 'You\'re all caught up! New notifications will appear here.' : 
               `Switch to "all" to see ${filter === 'unread' ? 'read' : 'unread'} notifications.`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={`bg-green-500 rounded-lg p-4 border-l-4 transition-all duration-200 hover:bg-green-400 ${
                  notification.is_read 
                    ? 'border-gray-400 opacity-75' 
                    : 'border-yellow-400 shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.icon)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-semibold ${notification.is_read ? 'text-gray-200' : 'text-white'}`}>
                          {notification.title}
                        </h3>
                        <p className={`mt-1 ${notification.is_read ? 'text-gray-300' : 'text-gray-100'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(notification.timestamp).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        {!notification.is_read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-green-200 hover:text-white transition-colors"
                            title="Mark as read"
                          >
                            <FaCheck />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-300 hover:text-red-100 transition-colors"
                          title="Delete notification"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    
                    {notification.action_url && (
                      <div className="mt-3">
                        <a
                          href={notification.action_url}
                          className="inline-flex items-center text-sm bg-white text-green-700 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          View Details →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
