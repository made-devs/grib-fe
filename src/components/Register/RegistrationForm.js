'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Shield,
  Upload,
  Lock,
  Smartphone,
  CheckCircle2,
  ScanFace,
  ChevronRight,
  Fingerprint,
  Crown,
} from 'lucide-react';

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // FIX: Menggunakan Lazy Initialization untuk state agar hanya dijalankan sekali
  // dan menghindari 'cascading render' dari useEffect.
  const [sessionId] = useState(
    () =>
      `GRB-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`
  );

  const [formData, setFormData] = useState({
    nik: '',
    name: '',
    wa: '',
    ktp: null,
    type: '',
  });
  const containerRef = useRef(null);

  // Animasi transisi antar step
  useGSAP(
    () => {
      gsap.fromTo(
        '.step-content',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    },
    { scope: containerRef, dependencies: [step] }
  );

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep((prev) => prev + 1);
    }, 1000); // Simulasi loading process
  };

  const handleTypeSelect = (type) => {
    setFormData({ ...formData, type });
    handleNext();
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto bg-[#0a0a0a] border border-[#333] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]"
    >
      {/* LEFT SIDE: STATUS PANEL */}
      <div className="md:w-1/3 bg-[#111] border-r border-[#333] p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-size-[20px_20px]"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8 text-[#D4AF37]">
            <Shield size={24} />
            <span className="font-oswald font-bold uppercase tracking-widest">
              Enlistment
            </span>
          </div>

          {/* Progress Steps */}
          <div className="space-y-6">
            {[
              { id: 1, label: 'Identitas', icon: <ScanFace size={16} /> },
              { id: 2, label: 'Verifikasi', icon: <Lock size={16} /> },
              { id: 3, label: 'Klasifikasi', icon: <Crown size={16} /> },
              { id: 4, label: 'ID Digital', icon: <Fingerprint size={16} /> },
            ].map((s) => (
              <div
                key={s.id}
                className={`flex items-center gap-4 transition-all duration-300 ${
                  step >= s.id ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    step >= s.id
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                      : 'border-gray-600 text-gray-600'
                  }`}
                >
                  {step > s.id ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <span className="text-xs font-bold">{s.id}</span>
                  )}
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase ${
                      step === s.id ? 'text-[#D4AF37]' : 'text-gray-400'
                    }`}
                  >
                    {s.label}
                  </p>
                  {step === s.id && (
                    <p className="text-[10px] text-green-500 font-mono animate-pulse">
                      PROCESSING...
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="p-4 bg-black/50 border border-white/10 rounded text-[10px] font-mono text-gray-500">
            {/* FIX: suppressHydrationWarning ditambahkan untuk mencegah error karena ID di server != ID di client */}
            <p suppressHydrationWarning>SESSION ID: {sessionId}</p>
            <p>ENCRYPTION: AES-256</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: INTERACTIVE FORM */}
      <div className="md:w-2/3 p-8 md:p-12 relative bg-[#0a0a0a]">
        {/* STEP 1: IDENTITY & KTP */}
        {step === 1 && (
          <div className="step-content h-full flex flex-col">
            <h2 className="font-oswald text-3xl text-white uppercase font-bold mb-2">
              Data <span className="text-[#D4AF37]">Diri</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Unggah identitas resmi untuk validasi database nasional.
            </p>

            <div className="space-y-5 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 uppercase font-bold">
                    NIK (KTP)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#111] border border-[#333] text-white p-3 rounded focus:border-[#D4AF37] outline-none font-mono"
                    placeholder="320xxxxxxxxx"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 uppercase font-bold">
                    WhatsApp
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#111] border border-[#333] text-white p-3 rounded focus:border-[#D4AF37] outline-none font-mono"
                    placeholder="08xxxxxxxx"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400 uppercase font-bold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full bg-[#111] border border-[#333] text-white p-3 rounded focus:border-[#D4AF37] outline-none"
                  placeholder="Sesuai KTP"
                />
              </div>

              {/* Upload Zone Simulation */}
              <div className="border-2 border-dashed border-[#333] bg-[#111] rounded-xl p-8 text-center hover:border-[#D4AF37]/50 hover:bg-[#1a1a1a] transition-all cursor-pointer group relative overflow-hidden">
                <div className="relative z-10">
                  <Upload
                    className="mx-auto text-gray-500 group-hover:text-[#D4AF37] mb-2 transition-colors"
                    size={32}
                  />
                  <p className="text-sm text-gray-300 font-bold">
                    Upload Foto E-KTP
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Format: JPG/PNG. Max 5MB.
                  </p>
                </div>
                {/* Scanning animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] opacity-0 group-hover:opacity-50 animate-[scan_2s_ease-in-out_infinite]"></div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#333] flex justify-end">
              <button
                onClick={handleNext}
                className="bg-[#D4AF37] text-black font-bold uppercase px-8 py-3 rounded hover:bg-white transition-colors flex items-center gap-2"
              >
                Lanjut Verifikasi <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: OTP VERIFICATION */}
        {step === 2 && (
          <div className="step-content h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#111] border border-[#D4AF37] rounded-full flex items-center justify-center mb-6 relative">
              <Smartphone className="text-[#D4AF37]" size={32} />
              <div className="absolute inset-0 border border-[#D4AF37] rounded-full animate-ping opacity-50"></div>
            </div>

            <h2 className="font-oswald text-3xl text-white uppercase font-bold mb-2">
              Verifikasi <span className="text-[#D4AF37]">Keamanan</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Kode OTP telah dikirim ke WhatsApp Anda. Masukkan 4 digit kode
              untuk melanjutkan enkripsi data.
            </p>

            <div className="flex gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-14 h-16 bg-[#111] border border-[#333] text-white text-center text-2xl font-bold rounded focus:border-[#D4AF37] outline-none"
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={loading}
              className="w-full max-w-xs bg-white text-black font-bold uppercase px-8 py-3 rounded hover:bg-[#D4AF37] transition-colors"
            >
              {loading ? 'Verifying...' : 'Konfirmasi Kode'}
            </button>

            <p className="text-xs text-gray-600 mt-6 cursor-pointer hover:text-[#D4AF37]">
              Kirim Ulang Kode (30s)
            </p>
          </div>
        )}

        {/* STEP 3: MEMBERSHIP CLASSIFICATION */}
        {step === 3 && (
          <div className="step-content h-full flex flex-col">
            <h2 className="font-oswald text-3xl text-white uppercase font-bold mb-6 text-center">
              Pilih <span className="text-[#D4AF37]">Klasifikasi</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 flex-1">
              {/* Free Plan */}
              <div
                onClick={() => handleTypeSelect('BASIC')}
                className="border border-gray-700 bg-[#111] p-6 rounded-xl cursor-pointer hover:border-gray-500 hover:bg-[#151515] transition-all relative group h-full flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-500 rounded-t-xl"></div>
                <h3 className="font-oswald text-2xl text-gray-300 uppercase font-bold mb-1">
                  Anggota Pratama
                </h3>
                <p className="text-xs text-gray-500 font-mono mb-6">
                  BASIC CLEARANCE
                </p>

                <ul className="space-y-3 mb-6 text-sm text-gray-400 flex-1">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> KTA Digital Basic
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Akses LBH Nasional
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Info Lowongan Kerja
                  </li>
                </ul>

                <button className="w-full border border-gray-600 text-gray-300 py-3 rounded font-bold uppercase text-xs group-hover:bg-gray-700 group-hover:text-white transition-colors">
                  Pilih Gratis
                </button>
              </div>

              {/* Paid Plan (Highlighted) */}
              <div
                onClick={() => handleTypeSelect('PREMIUM')}
                className="border border-[#D4AF37] bg-[#1a1a00]/20 p-6 rounded-xl cursor-pointer hover:bg-[#1a1a00]/40 transition-all relative group h-full flex flex-col shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  RECOMMENDED
                </div>
                <h3 className="font-oswald text-2xl text-[#D4AF37] uppercase font-bold mb-1">
                  Anggota Khusus
                </h3>
                <p className="text-xs text-[#D4AF37]/70 font-mono mb-6">
                  ELITE CLEARANCE
                </p>

                <ul className="space-y-3 mb-6 text-sm text-gray-200 flex-1">
                  <li className="flex gap-2 text-[#D4AF37]">
                    <Crown size={16} /> KTA & Sertifikat Premium
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Full Akses Pelatihan Bisnis
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Prioritas Penyaluran Kerja
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} /> Diskon GRIB Store & Sparepart
                  </li>
                </ul>

                <button className="w-full bg-[#D4AF37] text-black py-3 rounded font-bold uppercase text-xs hover:bg-white transition-colors">
                  Daftar Premium
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: SUCCESS / ID CARD */}
        {step === 4 && (
          <div className="step-content h-full flex flex-col items-center justify-center text-center">
            <div className="mb-8 relative perspective-1000">
              {/* Mini ID Card Preview */}
              <div className="w-64 h-40 bg-linear-to-br from-black to-[#111] rounded-xl border border-[#D4AF37] p-4 relative overflow-hidden shadow-2xl rotate-x-12 animate-float">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="text-left">
                    <p className="text-[#D4AF37] text-[8px] font-bold">
                      GRIB JAYA
                    </p>
                    <p className="text-white text-[10px]">MEMBER CARD</p>
                  </div>
                  <Fingerprint className="text-white/20" size={32} />
                </div>
                <div className="absolute bottom-4 left-4 text-left">
                  <p className="text-white font-bold font-mono text-sm">
                    A. PRATAMA
                  </p>
                  <p className="text-[#D4AF37] text-[8px] tracking-widest">
                    001-2024-JKT
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-oswald text-4xl text-white uppercase font-bold mb-2">
              Pendaftaran <span className="text-green-500">Berhasil</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md">
              Identitas digital Anda telah diterbitkan. Silakan login ke Member
              Area untuk mengakses pelatihan dan fitur lainnya.
            </p>

            <div className="flex gap-4 w-full justify-center">
              <button className="bg-[#111] border border-white/20 text-white font-bold uppercase px-6 py-3 rounded hover:border-[#D4AF37] transition-colors flex items-center gap-2 text-xs">
                <Upload size={16} /> Download ID
              </button>
              <button className="bg-[#D4AF37] text-black font-bold uppercase px-6 py-3 rounded hover:bg-white transition-colors flex items-center gap-2 text-xs">
                <Lock size={16} /> Login Member Area
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
