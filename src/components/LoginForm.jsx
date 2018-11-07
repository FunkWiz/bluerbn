import React from 'react'
import { observer } from 'mobx-react'
import FormGroup from './FormGroup';

export default observer(({ form }) => (
    <form onSubmit={form.onSubmit}>
        <FormGroup field={form.$('user')} />
        <FormGroup field={form.$('password')} type="password" />
        <button type="submit" className="btn btn-primary" onClick={form.onSubmit}>Submit</button>
    </form>
))