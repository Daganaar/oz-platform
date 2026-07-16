'use client';

import { useEffect, useState } from 'react';
import type { Hostel } from '@/lib/hostels';
import { postLead, patchLeadWhatsapp } from '@/lib/leadApi';
import { Nav } from './Nav';
import { CouponBar } from './CouponBar';
import { WhatsappOptInModal } from './WhatsappOptInModal';
import { Hero } from './Hero';
import { HostelsSection } from './HostelsSection';
import { HowItWorks } from './HowItWorks';
import { ComingSoonTeaser } from './ComingSoonTeaser';
import { Footer } from './Footer';
import { HostelModal } from './HostelModal';
import { NorthContactModal } from './NorthContactModal';
import styles from './LandingPage.module.scss';

const COUPON = 'OZ69';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LandingPage() {
  // hostel detail modal
  const [open, setOpen] = useState<Hostel | null>(null);
  const [booking, setBooking] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  // coupon bar / whatsapp opt-in
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [subError, setSubError] = useState('');
  const [copied, setCopied] = useState(false);
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [couponWa, setCouponWa] = useState('');
  const [waAdded, setWaAdded] = useState(false);
  const [waError, setWaError] = useState('');
  const [couponLeadId, setCouponLeadId] = useState<string | null>(null);

  // north contact modal
  const [contactOpen, setContactOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState('');

  // long-term teaser
  const [ltEmail, setLtEmail] = useState('');
  const [ltSent, setLtSent] = useState(false);
  const [ltError, setLtError] = useState('');

  useEffect(() => {
    try {
      // One-time sync from a browser-only external source at mount, matching
      // the original site's componentDidMount check — not derivable state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (localStorage.getItem('ozSubscribed') === '1') setSubscribed(true);
    } catch {
      // localStorage unavailable — fall back to unsubscribed
    }
  }, []);

  function onEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setSubError('');
  }

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setSubError('נא להזין כתובת מייל תקינה');
      return;
    }
    try {
      localStorage.setItem('ozSubscribed', '1');
      localStorage.setItem('ozEmail', value);
    } catch {
      // best-effort only
    }
    setSubscribed(true);
    setSubError('');
    setWaModalOpen(true);
    postLead({ source: 'coupon', email: value }).then((res) => {
      if (res?.id) setCouponLeadId(res.id);
    });
  }

  function copyCoupon() {
    try {
      navigator.clipboard?.writeText(COUPON);
    } catch {
      // best-effort only
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function onWaInput(e: React.ChangeEvent<HTMLInputElement>) {
    setCouponWa(e.target.value);
    setWaError('');
  }

  function closeWaModal() {
    setWaModalOpen(false);
  }

  function addWa(e: React.FormEvent) {
    e.preventDefault();
    const wa = couponWa.trim();
    const digits = wa.replace(/[^\d]/g, '');
    if (digits.length < 9) {
      setWaError('מספר לא תקין');
      return;
    }
    setWaAdded(true);
    setWaError('');
    setWaModalOpen(false);
    if (couponLeadId) {
      patchLeadWhatsapp(couponLeadId, wa);
    } else {
      postLead({ source: 'coupon', email: email || undefined, whatsapp: wa });
    }
  }

  function onSelectHostel(hostel: Hostel) {
    setOpen(hostel);
    setActiveImg(hostel.img);
    setBooking(false);
  }

  function onPickImage(src: string) {
    setActiveImg(src);
  }

  function openBooking() {
    setBooking(true);
  }

  function backFromBooking() {
    setBooking(false);
  }

  function closeModal() {
    setOpen(null);
    setBooking(false);
  }

  function onOpenNorthContact() {
    setContactOpen(true);
  }

  function closeContact() {
    setContactOpen(false);
    setLeadSent(false);
    setLeadError('');
  }

  function onLeadName(e: React.ChangeEvent<HTMLInputElement>) {
    setLeadName(e.target.value);
    setLeadError('');
  }

  function onLeadPhone(e: React.ChangeEvent<HTMLInputElement>) {
    setLeadPhone(e.target.value);
    setLeadError('');
  }

  function submitLead(e: React.FormEvent) {
    e.preventDefault();
    const name = leadName.trim();
    const phone = leadPhone.trim();
    if (name.length < 2) {
      setLeadError('נא להזין שם');
      return;
    }
    if (phone.replace(/\D/g, '').length < 9) {
      setLeadError('נא להזין מספר טלפון תקין');
      return;
    }
    setLeadSent(true);
    setLeadError('');
    postLead({ source: 'north_contact', name, phone });
  }

  function onLtEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setLtEmail(e.target.value);
    setLtError('');
  }

  function submitLt(e: React.FormEvent) {
    e.preventDefault();
    const value = ltEmail.trim();
    if (value.indexOf('@') !== -1) {
      if (!EMAIL_RE.test(value)) {
        setLtError('נא להזין כתובת מייל תקינה');
        return;
      }
      setLtSent(true);
      setLtError('');
      postLead({ source: 'long_term', email: value });
    } else {
      const digits = value.replace(/[^\d]/g, '');
      if (digits.length < 9) {
        setLtError('נא להזין מייל או מספר וואטסאפ תקין');
        return;
      }
      setLtSent(true);
      setLtError('');
      postLead({ source: 'long_term', whatsapp: value });
    }
  }

  return (
    <div className={styles.root}>
      <Nav />

      <CouponBar
        subscribed={subscribed}
        email={email}
        onEmailInput={onEmailInput}
        onSubscribe={onSubscribe}
        subError={subError}
        waAdded={waAdded}
        coupon={COUPON}
        copyLabel={copied ? 'הועתק' : 'העתקה'}
        onCopy={copyCoupon}
      />

      {waModalOpen && (
        <WhatsappOptInModal
          waVal={couponWa}
          onWaInput={onWaInput}
          addWa={addWa}
          waError={waError}
          closeWaModal={closeWaModal}
        />
      )}

      <Hero />

      <HostelsSection
        subscribed={subscribed}
        onSelectHostel={onSelectHostel}
        onOpenNorthContact={onOpenNorthContact}
      />

      <HowItWorks />

      <ComingSoonTeaser
        ltEmailVal={ltEmail}
        onLtEmail={onLtEmail}
        submitLt={submitLt}
        ltError={ltError}
        ltSent={ltSent}
      />

      <Footer />

      {open && (
        <HostelModal
          hostel={open}
          booking={booking}
          activeImg={activeImg}
          subscribed={subscribed}
          coupon={COUPON}
          onPickImage={onPickImage}
          openBooking={openBooking}
          backFromBooking={backFromBooking}
          closeModal={closeModal}
        />
      )}

      {contactOpen && (
        <NorthContactModal
          leadName={leadName}
          leadPhone={leadPhone}
          leadSent={leadSent}
          leadError={leadError}
          onLeadName={onLeadName}
          onLeadPhone={onLeadPhone}
          submitLead={submitLead}
          closeContact={closeContact}
        />
      )}
    </div>
  );
}
