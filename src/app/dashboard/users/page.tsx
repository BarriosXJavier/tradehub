import React from 'react'
import Dashcard from '@/ui/dashboard/dashcard';

type Props = {}

const Users = (props: Props) => {
  return (
    <div className="bg-slate-400">
      <Dashcard />
      <Dashcard />
      <Dashcard />
    </div>
  );
}

export default Users;