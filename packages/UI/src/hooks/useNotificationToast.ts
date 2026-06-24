import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useUserDataContext } from '../context/UserDataContext';
import { agent } from '@devlaunchers/utility';
import Alert from '../components/molecules/Alert';

// Module-level — shared across ALL instances of this hook
const seenIds = new Set<number>();
let isFirstFetch = true;
let isFetching = false;
let hasMounted = false;

function showToast(entityName: string, entityId: number, notificationId: number) {
  toast(
    React.createElement(Alert, { signal: 'notify' }, `New comment on "${entityName}"`),
    {
      toastId: notificationId,
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: { background: 'transparent', boxShadow: 'none', padding: 0 },
      onClick: () => {
        window.location.href = `/ideaspace/workshop/${entityId}`;
      },
    }
  );
}

export default function useNotificationToast() {
  const { isAuthenticated } = useUserDataContext();
  const router = useRouter();

  async function fetchNotifications() {
    if (isFetching) return;
    isFetching = true;

    try {
      const data = await agent.Notifications.get();
      if (!data || !Array.isArray(data)) return;

      if (isFirstFetch) {
        isFirstFetch = false;
        data.forEach((n) => {
          seenIds.add(n.id);
          const { readDateTime, event } = n.attributes;
          if (readDateTime) return;
          const { action, entityName, entityId } = event.data.attributes;
          if (action !== 'Commented') return;
          showToast(entityName, entityId, n.id);
        });
        return;
      }

      data.forEach((n) => {
        if (seenIds.has(n.id)) return;
        seenIds.add(n.id);
        const { readDateTime, event } = n.attributes;
        if (readDateTime) return;
        const { action, entityName, entityId } = event.data.attributes;
        if (action !== 'Commented') return;
        showToast(entityName, entityId, n.id);
      });
    } catch (error) {
      console.error('Notification fetch error:', error);
    } finally {
      isFetching = false;
    }
  }

  useEffect(() => {
    if (!isAuthenticated) return;
    if (hasMounted) return;
    hasMounted = true;
    fetchNotifications();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const handleRouteChange = () => fetchNotifications();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [isAuthenticated, router.events]);
}
