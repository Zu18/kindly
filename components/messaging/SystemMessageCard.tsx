'use client';
import React, { useEffect } from 'react';
import '../../app/styles/messaging-styles.css';
import markMessageAsRead from '@/supabase/models/messaging/markMessageAsRead';

type SystemMessageCardProps = {
  messageId: number;
  messageText: string;
  currentUser: string | undefined;
};

const SystemMessageCard: React.FC<SystemMessageCardProps> = ({
  messageId,
  messageText,
  currentUser,
}) => {
  useEffect(() => {
    const onRead = async () => {
      currentUser && (await markMessageAsRead(messageId, currentUser));
    };

    onRead();
  }, []);

  return (
    <div
      style={{
        minWidth: 20,
        minHeight: 2.75,
        maxHeight: 'max-content',
        maxWidth: 'fit-content',
      }}
      className='mx-auto my-6 flex items-center justify-center rounded-2xl bg-background p-3'
    >
      <p>{messageText}</p>
    </div>
  );
};

export default SystemMessageCard;