import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextInput from './TextInput'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('<TextInput />', () => {
  it('should render the <TextInput /> component', () => {
    const rendered = renderer.create(<TextInput />)
    expect(rendered).toBeTruthy()
  })

  it('should match the snapshot', () => {
    const rendered = renderer.create(<TextInput />).toJSON()
    expect(rendered).toMatchSnapshot()
  })

  it('should be of type `text` when rendered with no props', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.type()).to.equal('text')
  })
})
