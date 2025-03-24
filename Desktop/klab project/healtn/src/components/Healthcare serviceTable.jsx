import React from "react";
import "../assets/Styles/healthcareservicetable.css";

const HealthcareServicesTable = () => {
  return (
    <>
    <div className="included-membership"><h1>see what is included in HealthNet membership</h1></div>
    <div className="table-container">
      <table className="healthcare-table">
        <thead>
          <tr>
            <th rowSpan="2"></th>
            <th colSpan="2" className="membership-header">Included in Membership<br/>
            These services are accessible 24/7, available on-demand,<br/> and fully covered under your One Medical membership.</th>
            
            <th colSpan="2" className="copay-header">Copay & fees apply<br/>
            Similar to a traditional doctor’s office, these visits are scheduled, <br/>and the cost is billed to you or your insurance.<br/> Copays and deductibles may apply if processed through insurance</th>
          </tr>
          <tr>
            <th className="membership-info">Treat Me Now¹<br/>
            Receive assistance for common concerns<br/> by responding to a few questions in the app.<br/> Wait times may apply.</th>
            <th className="membership-info">Urgent Video Chat¹<br/>
            Fast, on-demand video consultations <br/>with the next available provider through the app. <br/>Wait times may apply.</th>
            <th className="copay-info">Office Visit<br/>
            Prearranged, in-person appointments with <br/>your preferred provider</th>
            <th className="copay-info">Remote Visit<br/>
            Book virtual appointments with the provider of <br/>your choice at your preferred time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="section-title">Everyday care<br/>Skin health, cold and flu, travel medicine, seasonal allergies, etc.</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes</td>
            <td className="yes-cell">Yes</td>
          </tr>
          <tr>
            <td className="section-title">Annual physicals & preventive care<br/>The “Live Well Visit" (our version of the annual physical), ongoing preventive care to match your lifestyle, genetic background, and personal goals</td>
            <td className="no-cell">No</td>
            <td className="no-cell">No</td>
            <td className="yes-cell">Yes</td>
            <td className="no-cell">No</td>
          </tr>
          <tr>
            <td className="section-title">Urgent concerns<br/>Minor injuries (like sprains, burns, cuts), fevers over 103°F, sudden back pain, etc.</td>
            <td className="yes-cell">Yes¹</td>
            <td className="yes-cell">Yes¹</td>
            <td className="yes-cell">Yes³</td>
            <td className="yes-cell">Yes</td>
          </tr>
          <tr>
            <td className="section-title">Gender & Sexual health<br/>
            Women’s Health, Men’s Health, Reproductive Health, etc.</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes</td>
            <td className="yes-cell">Yes²</td>
          </tr>
          <tr>
            <td className="section-title">Prescription requests & renewals</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes</td>
            <td className="yes-cell">Yes²</td>
          </tr>
          <tr>
            <td className="section-title">Chronic condition management<br/>Lifestyle and medication support for diabetes, hypertension, asthma, etc.</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes</td>
            <td className="yes-cell">Yes²</td>
          </tr>
          <tr>
            <td className="section-title">Mental health<br/>
            Mental health services including assessments, dedicated Mental Health Visit, Virtual Wellness <br/>Series5, routine Behavioral Health Screenings, etc.</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes²</td>
            <td className="yes-cell">Yes</td>
            <td className="yes-cell">Yes²</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="paragraph">
        <p>1 Your provider may recommend an Office or Remote Visit based on your clinical need. Office and Remote Visits are billed to you/your insurance; copays and deductibles may apply if billed to insurance.</p>

<p>2 Some services require Office Visits (e.g., cervical cancer screenings, prostate exams, testosterone management, etc.). Office Visits are billed to you/your insurance; copays and deductibles may apply if billed to insurance.</p>

<p>3 Urgent Office Visits are also available in select geographies.</p>

<p>4 Some medications require that we first see you by Office or Remote Visit before we can prescribe to you, including controlled substances and long term medications. Office and Remote Visits are billed to you/your insurance; copays and deductibles may apply if billed to insurance.</p>

<p>5 Wellness Series programming varies by geography.</p>

<p>6 For mental health assessment and triage. Your provider may recommend an Office or Remote Visit based on your clinical need. Office and Remote Visits are billed to you/your insurance; copays and deductibles may apply if billed to insurance.</p>

</div>
<div className="signup-to-day">
    <button className="signup-today">sign up today</button><br/>
    <p>learn more about<a href="membership alternatives">membership alternatives</a></p></div></>
  );
};

export default HealthcareServicesTable;
