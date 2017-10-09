// @flow

import type { Specializations, Traits } from 'armory-component-ui';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Specialization, actions } from 'armory-component-ui';

function mapStateToProps (state) {
  return {
    specializations: state.specializations,
    traits: state.traits,
  };
}

type Props = {
  specializations?: Specializations,
  traits?: Traits,
  fetchSpecializations?: (ids: Array<number>) => void,
  specs: Array<{
    id: number,
    traits?: Array<number>,
  }>,
  className?: string,
};

export default connect(mapStateToProps, {
  fetchSpecializations: actions.fetchSpecializations,
})(
class SkillsEmbed extends Component<Props> {
  props: Props;

  componentWillMount () {
    const { specs, fetchSpecializations } = this.props;

    fetchSpecializations && fetchSpecializations(specs.map((spec) => spec.id));
  }

  render () {
    const { specs, specializations = {}, traits = {}, className } = this.props;

    return (
      <div className={className}>
        {specs.map((spec) => (
          <Specialization
            data={spec}
            key={spec.id}
            specializations={specializations}
            traits={traits}
          />
        ))}
      </div>
    );
  }
}
);
